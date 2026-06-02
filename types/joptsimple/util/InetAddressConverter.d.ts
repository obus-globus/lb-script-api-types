import type { Class } from '../../java/lang/Class.d.ts'
import type { InetAddress } from '../../java/net/InetAddress.d.ts'
import type { ValueConverter } from '../../joptsimple/ValueConverter.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class InetAddressConverter extends Object implements ValueConverter<InetAddress> {
    constructor()
    convert(arg0: string): InetAddress;
    // private message(arg0: string): string;
    valuePattern(): string;
    valueType(): Class<InetAddress>;
}