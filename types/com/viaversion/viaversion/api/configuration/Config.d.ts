import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface Config extends Object{
    getValues(): { [key: string]: Object };
    reload(): void;
    save(): void;
    set(arg0: string, arg1: Object): void;
}