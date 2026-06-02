import type { Object } from '../../../java/lang/Object.d.ts'
import type { YearMonthFieldContainer } from '../../../kotlinx/datetime/format/YearMonthFieldContainer.d.ts'
export interface DateFieldContainer extends Object, YearMonthFieldContainer{
    day: number | null;
    dayOfWeek: number | null;
    dayOfYear: number | null;
}