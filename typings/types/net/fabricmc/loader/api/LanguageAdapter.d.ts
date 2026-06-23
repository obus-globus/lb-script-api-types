import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ModContainer } from '../../../../net/fabricmc/loader/api/ModContainer.d.ts'
export interface LanguageAdapter extends Object{
    create<T extends unknown>(arg0: ModContainer, arg1: string, arg2: Class<T>): T;
}