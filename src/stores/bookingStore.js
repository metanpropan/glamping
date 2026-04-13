import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useBookingStore = defineStore('booking', () => {
    const bookings = ref([])

    const addBooking = (booking) => {
        bookings.value.push({
            ...booking,
            id: Date.now(),
            createdAt: new Date().toISOString()
        })
        // Здесь можно добавить отправку на сервер
        saveToLocalStorage()
    }

    const getBookings = () => {
        return bookings.value
    }

    const saveToLocalStorage = () => {
        localStorage.setItem('bookings', JSON.stringify(bookings.value))
    }

    const loadFromLocalStorage = () => {
        const saved = localStorage.getItem('bookings')
        if (saved) {
            bookings.value = JSON.parse(saved)
        }
    }

    // Загружаем сохраненные бронирования
    loadFromLocalStorage()

    return {
        bookings,
        addBooking,
        getBookings
    }
})