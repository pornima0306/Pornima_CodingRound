import { identifierName } from "@angular/compiler";
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthServiceService } from "./auth-service.service";

@Injectable({
providedIn:'root'
})
export class authGard implements CanActivate,CanActivateChild{
    /* canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        throw new Error("Method not implemented.");
    } */
    constructor(private authService : AuthServiceService,
        private router : Router){}
    
    canActivate(
        route : ActivatedRouteSnapshot,
        state : RouterStateSnapshot
    ): Promise<boolean> | Observable<boolean> | boolean{
      return this.authService.isAuthenticated() 
                .then((res: boolean) => {
                    if(res){
                        return true;
                    }else{
                        this.router.navigate(['/']);
                        return false;
                    }
                })
    }

    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        /* return this.authService.isAuthenticated()
                .then((res:boolean)=>{
                    if(res){
                        return true;
                    }else{
                        this.router.navigate(['/']);
                        return false;
                    }
                }) */
             return this.canActivate(childRoute,state)

    }
}