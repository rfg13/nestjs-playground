import { Controller, Get, Post } from '@nestjs/common';

@Controller('music')
export class MusicController {
    
    @Post()
    createMusic(){}

    @Get('/:id')
    getMusic(){}

    @Get()
    listMusic(){}

}
