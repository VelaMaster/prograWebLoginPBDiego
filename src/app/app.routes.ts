import { Routes } from '@angular/router';
import { AutocompleteAutoActiveFirstOptionExample } from './autocomplete/autocomplete.module';
import { BadgeComponent } from './badge/badge.component';
import { ButtonComponent } from './button/button.component';
import { ButtonToggleComponent } from './button-toggle/button-toggle.component';
import { CardComponent } from './card/card.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { ChipsComponent } from './chips/chips.component';
import { BottomSheetComponent } from './bottom-sheet/bottom-sheet.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { DialogComponent } from './dialog/dialog.component';
import { DividerComponent } from './divider/divider.component';
import { ExpansionPanelComponent } from './expansion-panel/expansion-panel.component';
import { FormfieldComponent } from './formfield/formfield.component';
import { GridlistComponent } from './gridlist/gridlist.component';
import { IconComponent } from './icon/icon.component';
import { InputComponent } from './input/input.component';
import { ListComponent } from './list/list.component';
import { MenuComponent } from './menu/menu.component';
import { PaginatorComponent } from './paginator/paginator.component';
import { ProgressbarComponent } from './progressbar/progressbar.component';
import { ProgressspinnerComponent } from './progressspinner/progressspinner.component';
import { RadiobuttonComponent } from './radiobutton/radiobutton.component';
import { RipplesComponent } from './ripples/ripples.component';
import { SelectComponent } from './select/select.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { SliderComponent } from './slider/slider.component';
import { SlidetoggleComponent } from './slidetoggle/slidetoggle.component';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { SortheaderComponent } from './sortheader/sortheader.component';
import { StepperComponent } from './stepper/stepper.component';
import { TableComponent } from './table/table.component';
import { TabsComponent } from './tabs/tabs.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { TooltipComponent } from '@angular/material/tooltip';
import { TreeComponent } from './tree/tree.component';


export const routes: Routes = [
  {path : 'autocomplete', component: AutocompleteAutoActiveFirstOptionExample},
  {path : 'badge', component: BadgeComponent},
  {path : 'bottom-sheet', component: BottomSheetComponent},
  {path : 'button', component: ButtonComponent},
  {path : 'button-toggle', component: ButtonToggleComponent},
  {path : 'card', component: CardComponent},
  {path : 'checkbox', component: CheckboxComponent},
  {path : 'chips', component: ChipsComponent},
  {path : 'datepicker', component: DatepickerComponent},
  {path : 'dialog', component: DialogComponent},
  {path : 'divider', component: DividerComponent},
  {path : 'expansion-panel', component: ExpansionPanelComponent},
  {path : 'formfield', component: FormfieldComponent},
  {path : 'gridlist', component: GridlistComponent},
  {path : 'icon', component: IconComponent},
  {path : 'input', component: InputComponent},
  {path : 'list', component: ListComponent},
  {path : 'menu', component: MenuComponent},
  {path : 'paginator', component: PaginatorComponent},
  {path : 'progressbar', component: ProgressbarComponent},
  {path : 'progressspinner', component: ProgressspinnerComponent},
  {path : 'radiobutton', component: RadiobuttonComponent},
  {path : 'ripples', component: RipplesComponent},

  {path : 'select', component: SelectComponent},
  {path : 'sidenav', component: SidenavComponent},
  {path : 'slider', component: SliderComponent},
  {path : 'slidetoggle', component: SlidetoggleComponent},
  {path : 'snackbar', component: SnackbarComponent},
  {path : 'sortheader', component: SortheaderComponent},
  {path : 'stepper', component: StepperComponent},
  {path : 'table', component: TableComponent},
  {path : 'tabs', component: TabsComponent},
  {path : 'toolbar', component: ToolbarComponent},
  {path : 'tooltip', component: TooltipComponent},
  {path : 'tree', component: TreeComponent}
];
