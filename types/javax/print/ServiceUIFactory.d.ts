import type { Object } from '../../java/lang/Object.d.ts'
export abstract class ServiceUIFactory extends Object {
    static ABOUT_UIROLE: number;
    static ADMIN_UIROLE: number;
    static DIALOG_UI: string;
    static JCOMPONENT_UI: string;
    static JDIALOG_UI: string;
    static MAIN_UIROLE: number;
    static PANEL_UI: string;
    static RESERVED_UIROLE: number;
    constructor()
    getUI(arg0: number, arg1: string): Object;
    getUIClassNamesForRole(arg0: number): string[];
}