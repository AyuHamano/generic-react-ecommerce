import {Card, CardContent, Rating, Typography} from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export interface UserReviewProps {
    reviewerName: string;
    comment: string
    rating: number
    date: string
}

export function UserReview({reviewerName, comment, date, rating}: UserReviewProps) {

    return (
        <Card sx={{my: 3}}>
            <CardContent>
                <AccountCircleIcon/>
                <Typography>{reviewerName}</Typography>
                <Rating readOnly value={rating}></Rating>
                <Typography>{date}</Typography>
                <Typography>{comment}</Typography>
            </CardContent>

        </Card>
    )
}