import type { BoundMethodHandle } from '../../../java/lang/invoke/BoundMethodHandle.d.ts'
import type { BoundMethodHandle$Specializer$Factory } from '../../../java/lang/invoke/BoundMethodHandle$Specializer$Factory.d.ts'
import type { BoundMethodHandle$SpeciesData } from '../../../java/lang/invoke/BoundMethodHandle$SpeciesData.d.ts'
import type { ClassSpecializer } from '../../../java/lang/invoke/ClassSpecializer.d.ts'
export class BoundMethodHandle$Specializer extends ClassSpecializer<BoundMethodHandle, string, BoundMethodHandle$SpeciesData> {
    private constructor()
    makeFactory(): BoundMethodHandle$Specializer$Factory;
    newSpeciesData(arg0: string): BoundMethodHandle$SpeciesData;
    topSpeciesKey(): string;
}