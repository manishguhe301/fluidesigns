import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

export function RadioButtons() {
  return (
    <RadioGroup defaultValue='comfortable' className='flex gap-10 items-center'>
      <div className='flex items-center space-x-2'>
        <RadioGroupItem value='' id='' />
        <Label
          htmlFor='r1'
          className='font-inter font-normal text-sm text-[#0F172A]'
        >
          First Half
        </Label>
      </div>
      <div className='flex items-center space-x-2'>
        <RadioGroupItem value='comfortable' id='r2' />
        <Label
          htmlFor='r2'
          className='font-inter font-normal text-sm text-[#0F172A]'
        >
          Second Half
        </Label>
      </div>
    </RadioGroup>
  );
}
