import type { Class } from '../../java/lang/Class.d.ts'
import type { ValueConverter } from '../../joptsimple/ValueConverter.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Enum } from '../../java/lang/Enum.d.ts'
export abstract class EnumConverter<E extends Enum<E>> extends Object implements ValueConverter<E> {
    constructor(arg0: Class<E>)
    // private clazz: Class<E>;
    readonly delimiters: string;
    convert(arg0: string): E;
    // private message(arg0: string): string;
    setDelimiters(arg0: string): void;
    valuePattern(): string;
    valueType(): Class<E>;
}