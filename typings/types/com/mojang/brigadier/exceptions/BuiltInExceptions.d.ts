import type { BuiltInExceptionProvider } from '../../../../com/mojang/brigadier/exceptions/BuiltInExceptionProvider.d.ts'
import type { Dynamic2CommandExceptionType } from '../../../../com/mojang/brigadier/exceptions/Dynamic2CommandExceptionType.d.ts'
import type { DynamicCommandExceptionType } from '../../../../com/mojang/brigadier/exceptions/DynamicCommandExceptionType.d.ts'
import type { SimpleCommandExceptionType } from '../../../../com/mojang/brigadier/exceptions/SimpleCommandExceptionType.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class BuiltInExceptions extends Object implements BuiltInExceptionProvider {
    constructor()
    dispatcherExpectedArgumentSeparator(): SimpleCommandExceptionType;
    dispatcherParseException(): DynamicCommandExceptionType;
    dispatcherUnknownArgument(): SimpleCommandExceptionType;
    dispatcherUnknownCommand(): SimpleCommandExceptionType;
    doubleTooHigh(): Dynamic2CommandExceptionType;
    doubleTooLow(): Dynamic2CommandExceptionType;
    floatTooHigh(): Dynamic2CommandExceptionType;
    floatTooLow(): Dynamic2CommandExceptionType;
    integerTooHigh(): Dynamic2CommandExceptionType;
    integerTooLow(): Dynamic2CommandExceptionType;
    literalIncorrect(): DynamicCommandExceptionType;
    longTooHigh(): Dynamic2CommandExceptionType;
    longTooLow(): Dynamic2CommandExceptionType;
    readerExpectedBool(): SimpleCommandExceptionType;
    readerExpectedDouble(): SimpleCommandExceptionType;
    readerExpectedEndOfQuote(): SimpleCommandExceptionType;
    readerExpectedFloat(): SimpleCommandExceptionType;
    readerExpectedInt(): SimpleCommandExceptionType;
    readerExpectedLong(): SimpleCommandExceptionType;
    readerExpectedStartOfQuote(): SimpleCommandExceptionType;
    readerExpectedSymbol(): DynamicCommandExceptionType;
    readerInvalidBool(): DynamicCommandExceptionType;
    readerInvalidDouble(): DynamicCommandExceptionType;
    readerInvalidEscape(): DynamicCommandExceptionType;
    readerInvalidFloat(): DynamicCommandExceptionType;
    readerInvalidInt(): DynamicCommandExceptionType;
    readerInvalidLong(): DynamicCommandExceptionType;
}