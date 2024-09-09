import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Role } from "./roles.model";


@Injectable()
export class RoleService {
    constructor(@InjectModel(Role) private roleModel: typeof Role) { }

    getAll() {
        return this.roleModel.findAll()
    }

    create(role) {
        return this.roleModel.create(role)
    }
}
