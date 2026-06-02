import type { MoreObjects$ToStringHelper$UnconditionalValueHolder } from '../../../../com/google/common/base/MoreObjects$ToStringHelper$UnconditionalValueHolder.d.ts'
import type { MoreObjects$ToStringHelper$ValueHolder } from '../../../../com/google/common/base/MoreObjects$ToStringHelper$ValueHolder.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class MoreObjects$ToStringHelper extends Object {
    private constructor(className: string)
    // private className: string;
    // private holderHead: MoreObjects$ToStringHelper$ValueHolder;
    // private holderTail: MoreObjects$ToStringHelper$ValueHolder;
    // private omitEmptyValues: boolean;
    // private omitNullValues: boolean;
    add(name: string, value: Object): MoreObjects$ToStringHelper;
    add(name: string, value: boolean): MoreObjects$ToStringHelper;
    add(name: string, value: string): MoreObjects$ToStringHelper;
    add(name: string, value: number): MoreObjects$ToStringHelper;
    add(name: string, value: number): MoreObjects$ToStringHelper;
    add(name: string, value: number): MoreObjects$ToStringHelper;
    add(name: string, value: number): MoreObjects$ToStringHelper;
    // private addHolder(): MoreObjects$ToStringHelper$ValueHolder;
    // private addHolder(value: Object): MoreObjects$ToStringHelper;
    // private addHolder(name: string, value: Object): MoreObjects$ToStringHelper;
    // private addUnconditionalHolder(): MoreObjects$ToStringHelper$UnconditionalValueHolder;
    // private addUnconditionalHolder(value: Object): MoreObjects$ToStringHelper;
    // private addUnconditionalHolder(name: string, value: Object): MoreObjects$ToStringHelper;
    addValue(value: Object): MoreObjects$ToStringHelper;
    addValue(value: boolean): MoreObjects$ToStringHelper;
    addValue(value: string): MoreObjects$ToStringHelper;
    addValue(value: number): MoreObjects$ToStringHelper;
    addValue(value: number): MoreObjects$ToStringHelper;
    addValue(value: number): MoreObjects$ToStringHelper;
    addValue(value: number): MoreObjects$ToStringHelper;
    omitEmptyValues(): MoreObjects$ToStringHelper;
    omitNullValues(): MoreObjects$ToStringHelper;
    toString(): string;
}