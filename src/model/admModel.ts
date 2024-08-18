import { Role } from "@/types/roleType";
import { CRUDmodel } from "./modeloCRUD";
import { UserType } from "@/types/userType";

export class AdmModel implements CRUDmodel<UserType> {
    async create(data: {
        id: string
        name: string
        email: string
        phone: string
        password: string
        role: Role
    }): Promise<string | number> {
        const salt =  makeStr(8)
        const {id, name, email, phone, password, role} = data
        throw new Error("Method not implemented.");
    }
    find(id: string | number): Promise<UserType> {
        throw new Error("Method not implemented.");
    }
    update(data: object): Promise<void> {
        throw new Error("Method not implemented.");
    }
    delete(id: string | number): Promise<void> {
        throw new Error("Method not implemented.");
    }
    
}

function makeStr(arg0: number) {
    throw new Error("Function not implemented.");
}
