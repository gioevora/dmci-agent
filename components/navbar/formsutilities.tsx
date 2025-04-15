'use client'
import { siteConfig } from '@/config/site'
import { Button, Tooltip } from '@heroui/react'
import Link from 'next/link'
import React from 'react'
import { LuCalendarCheck, LuLampDesk, LuCalendarFold, LuCalculator, LuFileUser } from 'react-icons/lu'


const FormUtilities = () => {
    return (
        <div className='flex gap-2'>
            <Link href={siteConfig.links.crf} target='_blank'>
                <Tooltip content="Customer Reservation Form">
                    <Button size='md' className='border-green-300 text-green-300' radius='full' variant='flat' isIconOnly startContent={<LuCalendarCheck size={18} />} />
                </Tooltip>
            </Link>

            <Link href={siteConfig.links.planner} target='_blank'>
                <Tooltip content="Room Planner">
                    <Button size='md' className='border-green-300 text-green-300' radius='full' variant='flat' isIconOnly startContent={<LuLampDesk size={16} />} />
                </Tooltip>
            </Link>

            <Link href={siteConfig.links.appointment}>
                <Tooltip content="Set Appointment">
                    <Button size='md' className='border-green-300 text-green-300' radius='full' variant='flat' isIconOnly startContent={<LuCalendarFold size={16} />} />
                </Tooltip>
            </Link>

            <Link href={siteConfig.links.loancalculator}>
                <Tooltip content="Loan Calculator">
                    <Button size='md' className='border-green-300 text-green-300' radius='full' variant='flat' isIconOnly startContent={<LuCalculator size={16} />} />
                </Tooltip>
            </Link>

            <Link href={siteConfig.links.career}>
                <Tooltip content="Apply Now">
                    <Button size='md' className='border-green-300 text-green-300' radius='full' variant='flat' isIconOnly startContent={<LuFileUser size={16} />} />
                </Tooltip>
            </Link>






        </div>
    )
}

export default FormUtilities
