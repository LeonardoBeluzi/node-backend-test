export interface IUserStore {
    name: string
    dob: Date
    address: string
    description?: string
}

export interface IUserUpdate {
    name?: string
    dob?: Date
    address?: string
    description?: string
}