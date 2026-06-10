import type { Object } from '../../../java/lang/Object.d.ts'
import type { OptionInstance } from '../../../net/minecraft/client/OptionInstance.d.ts'
export interface Options$OptionAccess extends Object{
    process<T extends Object | number | string | boolean>(name: string, option: OptionInstance<T>): void;
}