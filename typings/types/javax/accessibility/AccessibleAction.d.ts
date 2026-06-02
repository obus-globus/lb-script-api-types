import type { Object } from '../../java/lang/Object.d.ts'
export interface AccessibleAction extends Object{
    doAccessibleAction(arg0: number): boolean;
    getAccessibleActionCount(): number;
    getAccessibleActionDescription(arg0: number): string;
}