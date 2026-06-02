import type { Object } from '../../../java/lang/Object.d.ts'
export interface OSFileStore extends Object{
    getDescription(): string;
    getFreeInodes(): number;
    getFreeSpace(): number;
    getLabel(): string;
    getLogicalVolume(): string;
    getMount(): string;
    getName(): string;
    getOptions(): string;
    getTotalInodes(): number;
    getTotalSpace(): number;
    getType(): string;
    getUUID(): string;
    getUsableSpace(): number;
    getVolume(): string;
    updateAttributes(): boolean;
}