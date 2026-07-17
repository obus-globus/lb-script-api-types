import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface Config extends Object{
    getValues(): JavaMap<string, Object>;
    reload(): void;
    save(): void;
    set(arg0: string, arg1: Object): void;
}