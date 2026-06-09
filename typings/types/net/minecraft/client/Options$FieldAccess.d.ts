import type { Function } from '../../../java/util/function/Function.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Options$OptionAccess } from '../../../net/minecraft/client/Options$OptionAccess.d.ts'
export interface Options$FieldAccess extends Object, Options$OptionAccess {
    process<T extends Object | number | string | boolean>(name: string, value: T, reader: (param0: string) => T, writer: (param0: T) => string): T;
    process(name: string, value: boolean): boolean;
    process(name: string, value: number): number;
    process(name: string, value: string): string;
}