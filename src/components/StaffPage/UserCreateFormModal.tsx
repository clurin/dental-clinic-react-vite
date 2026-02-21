import { z } from 'zod'
import { createUserSchema, updateUserSchema } from '../../app/schemas/user.schema'
import { useCreateUserMutation, useUpdateUserMutation } from '../../app/userApi'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import type { User } from '../../app/models/userTypes'
import { CloseCircleOutlined } from '@ant-design/icons'
import { useEffect } from 'react'

type CreateInput = z.infer<typeof createUserSchema>;
type UpdateInput = z.infer<typeof updateUserSchema>;

type Props = {
    isOpen: boolean,
    onClose: () => void,
}

const UserCreateFormModal = ({ isOpen, onClose, user }: Props) => {
    const [createUser, { isLoading }] = useCreateUserMutation()
    const [updateUser] = useUpdateUserMutation()

    const schema = user ? updateUserSchema : createUserSchema
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm<CreateInput | UpdateInput>({
        resolver: zodResolver(schema),
        defaultValues: user
            ? {
                first_name: user.first_name,
                last_name: user.last_name,
                email: user.email,
                phone: user.phone,
                role: user.role,
                is_active: user.is_active,
            }
            : {
                first_name: '',
                last_name: '',
                email: '',
                phone: '',
                role: 'assistant',
            }
    })

    useEffect(() => {
        if (isOpen) {
            if (user) {
                reset({
                    first_name: user.first_name,
                    last_name: user.last_name,
                    email: user.email,
                    phone: user.phone,
                    role: user.role,
                    is_active: user.is_active,
                    password: ''
                })
            } else {
                reset({
                    first_name: '',
                    last_name: '',
                    email: '',
                    phone: '',
                    role: 'assistant',
                    password: '',
                    is_active: true,
                })
            }
        }
    }, [isOpen, user, reset])

    if (!isOpen) return null

    const onSubmit = async (data: CreateInput | UpdateInput) => {
        try {
            if (user) {
                await updateUser({ id: user.id, data: data as z.infer<typeof updateUserSchema> }).unwrap()
            } else {
                await createUser(data as z.infer<typeof createUserSchema>).unwrap()
            }

            reset()
            onClose()
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40">
            <div className="w-full max-w-md rounded-xl bg-white p-6">
                <div className="flex flex-row items-center justify-between">
                    <h3 className="mb-4 text-lg font-medium">
                        {user ? "Редактировать сотрудника" : "Добавить сотрудника"}
                    </h3>
                    <button
                        onClick={onClose}
                        className='scale-150 cursor-pointer'>
                        <CloseCircleOutlined />
                    </button>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
                    <input {...register('first_name')} placeholder="Имя" className="border p-2 rounded" />
                    {errors.first_name && <p className="text-quit-main text-sm">{errors.first_name.message}</p>}

                    <input {...register('last_name')} placeholder="Фамилия" className="border p-2 rounded" />
                    {errors.last_name && <p className="text-quit-main text-sm">{errors.last_name.message}</p>}

                    <input {...register('email')} placeholder="Email" className="border p-2 rounded" />
                    {errors.email && <p className="text-quit-main text-sm">{errors.email.message}</p>}

                    <input {...register('phone')} placeholder="Телефон" className="border p-2 rounded" />
                    {errors.phone && <p className="text-quit-main text-sm">{errors.phone.message}</p>}

                    <input
                        type="password"
                        {...register('password')}
                        placeholder="Пароль"
                        className="border p-2 rounded" />
                    {errors.password && <p className="text-quit-main text-sm">{errors.password.message}</p>}

                    <select {...register('role')} className="border p-2 rounded">
                        <option value="admin">Администратор</option>
                        <option value="doctor">Врач</option>
                        <option value="assistant">Ассистент</option>
                    </select>

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="bg-blue-600 text-white rounded p-2 mt-2">
                        {isLoading ? 'Сохранение...' : 'Сохранить'}
                    </button>
                </form>
            </div>
        </div>
    )
}

export default UserCreateFormModal