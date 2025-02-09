import { AdminService } from "@admin/services/admin.service";
import { CommonModule } from "@angular/common";
import { Component, inject } from "@angular/core";
import { RouterLink } from "@angular/router";
import { ApiResponseComponent } from "@core/components/controls/api-response/api-response.component";
import { RoutePipe } from "@routing";
import { PanelModule } from 'primeng/panel';
import { TableModule } from "primeng/table";

@Component({
  standalone: true,
  templateUrl: "./roles.component.html",
  imports: [CommonModule, PanelModule, RouterLink, RoutePipe, ApiResponseComponent, TableModule],
})
export class RolesComponent {
  readonly #adminService = inject(AdminService);

  readonly roles$ = this.#adminService.getRoles();
}
