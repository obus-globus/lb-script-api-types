import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { LanguageAdapter } from '../../../../net/fabricmc/loader/api/LanguageAdapter.d.ts'
import type { ModContainer } from '../../../../net/fabricmc/loader/api/ModContainer.d.ts'
export class DefaultLanguageAdapter extends Object implements LanguageAdapter {
    static INSTANCE: DefaultLanguageAdapter;
    static getDefault(): LanguageAdapter;
    constructor()
    create<T extends Object | number | string | boolean>(arg0: ModContainer, arg1: string, arg2: Class<T>): T;
}