import type { Object } from '../../../java/lang/Object.d.ts'
import type { OptionInstance } from '../../../net/minecraft/client/OptionInstance.d.ts'
export interface Options$OptionAccess extends Object{
    process(name: string, option: OptionInstance<T>): void;
}