import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class PacketCompressionAlgorithm extends Enum<PacketCompressionAlgorithm> {
    static None: PacketCompressionAlgorithm;
    static Snappy: PacketCompressionAlgorithm;
    static ZLib: PacketCompressionAlgorithm;
    static getByName(paramarg0: string): PacketCompressionAlgorithm;
    static getByName(paramarg0: string, paramarg1: PacketCompressionAlgorithm): PacketCompressionAlgorithm;
    static getByValue(paramarg0: number): PacketCompressionAlgorithm;
    static getByValue(paramarg0: number, paramarg1: PacketCompressionAlgorithm): PacketCompressionAlgorithm;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): PacketCompressionAlgorithm;
    static values(): PacketCompressionAlgorithm[];
    private constructor(arg2: number)
    private constructor(arg2: PacketCompressionAlgorithm)
    readonly value: number;
    getValue(): number;
    name(): "ZLib" | "Snappy" | "None";
}