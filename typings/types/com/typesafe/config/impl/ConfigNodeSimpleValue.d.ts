import type { AbstractConfigNodeValue } from '../../../../com/typesafe/config/impl/AbstractConfigNodeValue.d.ts'
import type { AbstractConfigValue } from '../../../../com/typesafe/config/impl/AbstractConfigValue.d.ts'
import type { Token } from '../../../../com/typesafe/config/impl/Token.d.ts'
export class ConfigNodeSimpleValue extends AbstractConfigNodeValue {
    constructor(arg0: Token)
    // private token: Token;
    token(): Token;
    tokens(): Token[];
    value(): AbstractConfigValue;
}