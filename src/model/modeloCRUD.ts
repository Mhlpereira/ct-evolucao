export interface CRUDmodel<T>{
    create(data: object): Promise<string| number>
    find(id: string | number): Promise<T>
    update(data: object): Promise<void>
    delete(id: string | number): Promise<void>
}