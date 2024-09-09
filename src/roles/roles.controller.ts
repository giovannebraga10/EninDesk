import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { RoleService } from "./roles.service";


@Controller("roles")
export class RolesController {
    constructor(private readonly roleService: RoleService){}
    @Get("/")
    getAll(){
        return this.roleService.getAll()
    }

    @Get("/:id")
    getOne(@Param("id") id){
        return id 
    }
    
    @Post("/")
    create(@Body() body){
        return this.roleService.create(body)
    }
}