import { Controller, Post, Body } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { User, Bookmark } from "@prisma/client";
import { AuthDto } from "./dto";

@Controller('auth')
export class AuthController{
    constructor(private authService: AuthService) {}
    
    @Post('signup')
    signup(@Body() dto:AuthDto) {
        console.log(dto)
        return this.authService.signup();
    }
    
    
    @Post('signin')
    signin() {
        return this.authService.signin();
    }
}