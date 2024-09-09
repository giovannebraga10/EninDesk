import { Controller, Get, Param } from "@nestjs/common";


@Controller("roles")
export class RolesController {
    @Get("/")
    getAll(){
        return "oi"
    }

    @Get("/:id")
    getOne(@Param("id") id){
        return id 
    }
}