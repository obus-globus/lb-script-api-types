import type { Converter } from '../../../../io/jsonwebtoken/impl/lang/Converter.d.ts'
import type { KeyOperation } from '../../../../io/jsonwebtoken/security/KeyOperation.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class KeyOperationConverter extends Object implements Converter<KeyOperation, Object> {
    constructor(arg0: { [key: string]: KeyOperation })
    // private registry: { [key: string]: KeyOperation };
    applyFrom(arg0: Object): KeyOperation;
    applyTo(arg0: KeyOperation): string;
}