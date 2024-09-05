import { Body, Controller, Get, Post, Req, UnauthorizedException, UseGuards, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import CreateAuthDto from './dto/createAuth.dto';
import LocalGuard from '../guards/local.guard';
import { Request } from 'express';
import { SkipAuth } from 'src/decorators/skipAuth.decorator';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @SkipAuth()
    @Post('register')
    async register(
        @Body(ValidationPipe) createAuthDto: CreateAuthDto
    ) {
        return await this.authService.register(createAuthDto)
    }

    @SkipAuth()
    @Post('login')
    @UseGuards(LocalGuard)
    async login(@Req() req: Request) {
        return req.user
    }
}
