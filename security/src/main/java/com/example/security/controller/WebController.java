package com.example.security.controller;

import com.example.security.security.anotation.IsUser;
import jakarta.annotation.security.RolesAllowed;
import org.springframework.context.annotation.Role;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;

@RestController
public class WebController {

    // Tất cả mọi người đều xem được không cần login
    @GetMapping("/hello")
    public ResponseEntity<?> getHome(){
        return ResponseEntity.ok("Qua hết");
    }

    // Login xem thông tin
    @GetMapping("/info")
    public ResponseEntity<?> getInfo(Principal principal){
        return ResponseEntity.ok(principal);
    }

    // Chia role sử dụng @PreAuthorize
    @PreAuthorize("hasAnyRole('ADMIN', 'SALE')")
    @GetMapping("/dashboard")
    public ResponseEntity<?> getDashboard(){
        return ResponseEntity.ok("Xem dashboard - ADMIN, SALE");
    }

    // Chia role sử dụng @Secured Annotation
    @Secured("ROLE_ADMIN")
    @GetMapping("/admin")
    public ResponseEntity<?> getUserByAdmin(){
        return ResponseEntity.ok("Quản lý user (CRU) - ADMIN");
    }

    // 4 role được cấu hình chung trong package security
    @GetMapping("/category")
    public ResponseEntity<?> getCategory(){
        return ResponseEntity.ok("Quản lý category (CRUD) ADMIN, SALE");
    }
    @GetMapping("/product")
    public ResponseEntity<?> getProduct(){
        return ResponseEntity.ok("Quản lý sản phẩm (CRUD) ADMIN, SALE");
    }
    @GetMapping("/brand")
    public ResponseEntity<?> getBrand(){
        return ResponseEntity.ok("Quản lý brand (CRUD) ADMIN, SALE");
    }
    @GetMapping("/order")
    public ResponseEntity<?> getOrder(){
        return ResponseEntity.ok("Quản lý order (CRU) ADMIN, SALE");
    }

    // Chia role sử dụng  @RolesAllowed Annotation
    @RolesAllowed({"ADMIN","SALE","AUTHOR"})
    @GetMapping("/post")
    public ResponseEntity<?> getPost(){
        return ResponseEntity.ok("Quản lý bài viết (CRUD) ADMIN, SALE, AUTHOR");
    }

    // Chia role sử dụng Method Security Meta-Annotation
    @IsUser
    @GetMapping("/user")
    public ResponseEntity<?> getInfoUser(){
        return ResponseEntity.ok("Xem thông tin cá nhân, thay đổi thông tin cá nhân USER");
    }
}
