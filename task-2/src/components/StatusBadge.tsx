interface StatusBadgeProps {
  status: "active" | "pending" | "error";
}

function StatusBadge({status}:StatusBadgeProps){
    return(
        <>
<span className={`badge_${status}`}>
{status==="active" ? "Active" : status==="pending" ?"Pending" : "Error"}
</span>
        </>
    )
}
export default StatusBadge;