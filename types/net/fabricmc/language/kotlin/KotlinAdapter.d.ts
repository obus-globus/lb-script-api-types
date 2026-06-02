import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { LanguageAdapter } from '../../../../net/fabricmc/loader/api/LanguageAdapter.d.ts'
import type { ModContainer } from '../../../../net/fabricmc/loader/api/ModContainer.d.ts'
export class KotlinAdapter extends Object implements LanguageAdapter {
    static getDefault(): LanguageAdapter;
    constructor()
    create<T extends Object | number | string | boolean>(mod: ModContainer, value: string, type: Class<T>): T;
}