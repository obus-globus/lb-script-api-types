import type { ConfigValue } from '../../../../com/typesafe/config/ConfigValue.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface ConfigDocument extends Object{
    hasPath(arg0: string): boolean;
    render(): string;
    withValue(arg0: string, arg1: ConfigValue): ConfigDocument;
    withValueText(arg0: string, arg1: string): ConfigDocument;
    withoutPath(arg0: string): ConfigDocument;
}