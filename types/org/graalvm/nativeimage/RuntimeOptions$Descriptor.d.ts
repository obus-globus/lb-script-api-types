import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface RuntimeOptions$Descriptor extends Object{
    convertValue(value: string): Object;
    defaultValue(): Object;
    deprecated(): boolean;
    deprecatedMessage(): string;
    help(): string;
    name(): string;
    valueType(): Class<Object>;
}