import React, { useState } from "react";
import { Button } from "react-bootstrap";

const holidays = [
    { name: "Halloween", emoji: "🎃", month: 10, day: 31 },
    { name: "Eid", emoji: "🌙", month: 5, day: 5 },
    { name: "New Year's Day", emoji: "🎉", month: 1, day: 1 },
    { name: "Thanksgiving", emoji: "🦃", month: 11, day: 25 },
    { name: "Easter", emoji: "🥚", month: 4, day: 4 },
];

const nextHolidayAlphabetically = (currentHoliday: string): string => {
    const currentIndex = holidays.findIndex((holiday) => holiday.name === currentHoliday);
    const nextIndex = (currentIndex + 1) % holidays.length;
    return holidays[nextIndex].name;
};

const nextHolidayByYear = (currentHoliday: string): string => {
    const currentIndex = holidays.findIndex((holiday) => holiday.name === currentHoliday);
    const currentHolidayDate = new Date(2023, holidays[currentIndex].month - 1, holidays[currentIndex].day);
    const sortedHolidaysByDate = holidays
        .map((holiday) => ({
            ...holiday,
            date: new Date(2023, holiday.month - 1, holiday.day),
        }))
        .sort((a, b) => a.date.getTime() - b.date.getTime());

    const nextHoliday = sortedHolidaysByDate.find((holiday) => holiday.date > currentHolidayDate);
    return nextHoliday ? nextHoliday.name : sortedHolidaysByDate[0].name;
};

export function CycleHoliday(): React.JSX.Element {
    const [currentHoliday, setCurrentHoliday] = useState<string>("Halloween");

    return (
        <div>
            <h3>Holiday: {holidays.find((holiday) => holiday.name === currentHoliday)?.emoji}</h3>
            <Button
                onClick={() => {
                    setCurrentHoliday(nextHolidayAlphabetically(currentHoliday));
                }}
            >
                Advance by Alphabet
            </Button>
            <Button
                onClick={() => {
                    setCurrentHoliday(nextHolidayByYear(currentHoliday));
                }}
            >
                Advance by Year
            </Button>
        </div>
    );
}
