import type { WbemcliUtil$WmiResult } from '../../../../com/sun/jna/platform/win32/COM/WbemcliUtil$WmiResult.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Win32Processor$BitnessProperty } from '../../../../oshi/driver/windows/wmi/Win32Processor$BitnessProperty.d.ts'
import type { Win32Processor$ProcessorIdProperty } from '../../../../oshi/driver/windows/wmi/Win32Processor$ProcessorIdProperty.d.ts'
import type { Win32Processor$VoltProperty } from '../../../../oshi/driver/windows/wmi/Win32Processor$VoltProperty.d.ts'
export class Win32Processor extends Object {
    static queryBitness(): WbemcliUtil$WmiResult<Win32Processor$BitnessProperty>;
    static queryProcessorId(): WbemcliUtil$WmiResult<Win32Processor$ProcessorIdProperty>;
    static queryVoltage(): WbemcliUtil$WmiResult<Win32Processor$VoltProperty>;
    private constructor()
}