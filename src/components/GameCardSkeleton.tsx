import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react"

const GameCardSkeleton = () => {
  return (
      <Card width="200px" border-radius={15} overflow="hidden">
          <Skeleton height='200px' />
          <CardBody>
              <SkeletonText/>
          </CardBody>
    </Card>
  )
}

export default GameCardSkeleton