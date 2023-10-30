export default function formatDate(timestamp) {
    const datePosted = new Date(timestamp.seconds*1000);

    const month = String(datePosted.getMonth() + 1).padStart(2, '0');
    const day = String(datePosted.getDate()).padStart(2, '0');
    const year = datePosted.getFullYear();
    const shortDate = `${month}/${day}/${year} `;

    const hours = datePosted.getHours();
    const minutes = String(datePosted.getMinutes()).padStart(2, '0');
    const amOrPm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12;
    const time = `${formattedHours}:${minutes} ${amOrPm}`;

    return shortDate + " " + time;
}