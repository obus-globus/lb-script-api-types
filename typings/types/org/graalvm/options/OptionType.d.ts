import type { Class } from '../../../java/lang/Class.d.ts'
import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { Function } from '../../../java/util/function/Function.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { OptionType$Converter } from '../../../org/graalvm/options/OptionType$Converter.d.ts'
export class OptionType<T extends unknown> extends Object {
    static defaultType(paramvalue: Object | null): OptionType<Object>;
    static defaultType(paramclazz: Class<Object>): OptionType<Object>;
    constructor(name: string, defaultValue: T, stringConverter: (param0: string) => T)
    constructor(name: string, defaultValue: T, stringConverter: (param0: string) => T, validator: (param0: T) => void)
    constructor(name: string, stringConverter: (param0: string) => T)
    constructor(name: string, stringConverter: (param0: string) => T, validator: (param0: T) => void)
    // private converter: (param0: T, param1: string, param2: string) => T;
    // private isDefaultType: boolean;
    // private isOptionMap: boolean;
    readonly name: string;
    // private validator: (param0: T) => void;
    convert(previousValue: Object, nameSuffix: string, value: string): T;
    convert(value: string): T;
    getDefaultValue(): T;
    getName(): string;
    isDefaultType(): boolean;
    isOptionMap(): boolean;
    toString(): string;
    validate(value: T): void;
}