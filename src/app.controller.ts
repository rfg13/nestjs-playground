import { Controller, Get } from "@nestjs/common";

@Controller()
export class AppController {

    @Get()
    getRootRoute(){
        return 'Root Route';
    }

    @Get("/notfound")
    getNotFound(){
        return 'Not Found';
    }
}