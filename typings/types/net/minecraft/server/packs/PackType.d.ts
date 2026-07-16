import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class PackType extends Enum<PackType> {
    static CLIENT_RESOURCES: PackType;
    static SERVER_DATA: PackType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): PackType;
    static values(): PackType[];
    private constructor(directory: string)
    readonly directory: string;
    getDirectory(): string;
    name(): "CLIENT_RESOURCES" | "SERVER_DATA";
}