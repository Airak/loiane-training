import { AlunoDetalheResolver } from './guards/aluno-detalhe.resolver';
import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunosComponent } from './alunos.component';
import { AlunosDeactivateGuard } from './../guards/alunos-deactivate.guards';

const cursosRoutes: Routes = [
  {
    path: '',
    component: AlunosComponent,
    children: [
      {
        path: 'novo',
        component: AlunoFormComponent,
        canDeactivate: [AlunosDeactivateGuard],
      },
      {
        path: ':id',
        component: AlunoDetalheComponent,
        resolve: { aluno: AlunoDetalheResolver },
      },
      {
        path: ':id/editar',
        component: AlunoFormComponent,
        canDeactivate: [AlunosDeactivateGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(cursosRoutes)],
  exports: [RouterModule],
})
export class AlunosRoutingModule {}
