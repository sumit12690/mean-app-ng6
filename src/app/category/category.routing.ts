import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { DetailComponent } from './detail/detail.component';
import { ListComponent } from './list/list.component';

export const routes: Routes = [
    {
        path: 'category',
        redirectTo: 'category/list',
        pathMatch: 'full'
    },
    {
        path: '',
        redirectTo: 'category/list',
        pathMatch: 'full'
    },
    {
        path: 'category/create',
        component: CreateComponent
    },
    {
        path: 'category/list',
        component: ListComponent
    },
    {
        path: 'category/edit/:id',
        component: EditComponent
    },
    {
        path: 'category/detail/:id',
        component: DetailComponent
    },
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
