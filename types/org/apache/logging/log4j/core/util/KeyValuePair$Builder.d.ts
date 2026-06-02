import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Builder } from '../../../../../../org/apache/logging/log4j/core/util/Builder.d.ts'
import type { KeyValuePair } from '../../../../../../org/apache/logging/log4j/core/util/KeyValuePair.d.ts'
export class KeyValuePair$Builder extends Object implements Builder<KeyValuePair> {
    constructor()
    // private key: string;
    // private value: string;
    build(): KeyValuePair;
    getErrorPrefix(): string;
    isValid(): boolean;
    setKey(aKey: string): KeyValuePair$Builder;
    setValue(aValue: string): KeyValuePair$Builder;
}