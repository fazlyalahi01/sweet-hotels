import SectionHeading from "@/components/common/SectionHeading";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { promotions } from "@/constants";
import { SlCalender } from "react-icons/sl";



const PromotionsPage = () => {
    return (
        <>
            <SectionHeading title="Offer Campaigns" />
            <div className="container-x py-12 px-4">
                <Tabs defaultValue="cashback" >
                    <TabsList>
                        <TabsTrigger value="cashback">Cashback Offer</TabsTrigger>
                        <TabsTrigger value="buy">Buy & Get Offer</TabsTrigger>
                    </TabsList>
                    <TabsContent value="cashback">
                        <div className="grid md:grid-cols-3 gap-4">

                            {
                                promotions.cashback.map((promotion) => {
                                    return (
                                        <div className="space-y-1 border p-4 rounded" key={promotion.campaignName}>
                                            <h4 className="text-sm font-semibold">{promotion.name}</h4>
                                            <p className="text-sm">
                                                {promotion.description}
                                            </p>
                                            <div className="flex items-center pt-2">
                                                <SlCalender className="mr-2 h-4 w-4 opacity-70" />{" "}
                                                <span className="text-xs text-muted-foreground">
                                                    {promotion.validTill}
                                                </span>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </TabsContent>
                    <TabsContent value="buy">
                    <div className="grid md:grid-cols-3 gap-4">

{
    promotions.buyAndGetFree.map((promotion) => {
        return (
            <div className="space-y-1 border p-4 rounded" key={promotion.campaignName}>
                <h4 className="text-sm font-semibold">{promotion.name}</h4>
                <p className="text-sm">
                    {promotion.description}
                </p>
                <div className="flex items-center pt-2">
                    <SlCalender className="mr-2 h-4 w-4 opacity-70" />{" "}
                    <span className="text-xs text-muted-foreground">
                        {promotion.validTill}
                    </span>
                </div>
            </div>
        )
    })
}
</div>
                    </TabsContent>
                </Tabs>
            </div>
        </>
    );
}
export default PromotionsPage;