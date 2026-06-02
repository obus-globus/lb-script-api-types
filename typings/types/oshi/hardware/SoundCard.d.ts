import type { Object } from '../../java/lang/Object.d.ts'
export interface SoundCard extends Object{
    getCodec(): string;
    getDriverVersion(): string;
    getName(): string;
}