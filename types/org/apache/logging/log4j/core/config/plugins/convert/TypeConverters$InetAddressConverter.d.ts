import type { InetAddress } from '../../../../../../../../java/net/InetAddress.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { TypeConverter } from '../../../../../../../../org/apache/logging/log4j/core/config/plugins/convert/TypeConverter.d.ts'
export class TypeConverters$InetAddressConverter extends Object implements TypeConverter<InetAddress> {
    constructor()
    convert(s: string): InetAddress;
}